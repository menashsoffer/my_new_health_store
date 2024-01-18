-- Active: 1704194199087@@127.0.0.1@5432@Forever-project

CREATE SCHEMA users_for_store

ALTER TABLE users_for_store.users (
  id SERIAL PRIMARY KEY, 
  isadmin BOOLEAN NOT NULL DEFAULT false,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  city TEXT NOT NULL,
  street TEXT NOT NULL, 
  postalcode NUMERIC,
  phonenumber NUMERIC
);

create type users_for_store.jwt_token as (
  email text,
  password text,
  isadmin boolean
);

CREATE TYPE users_for_store.auth_response AS (
  jwt_token users_for_store.jwt_token,
  user_details json
);



create function users_for_store.authenticate(
  email text,
  password text
) RETURNS users_for_store.auth_response AS $$
declare
  account users_for_store.users;
  user_json json;
begin
  select a.* into account
    from users_for_store.users as a
    where a.email = authenticate.email;

  if account.password = password then
    user_json = json_build_object(
    'id', account.id,
    'email' , account.email,
    'firstname', account.firstname, 
    'lastname', account.lastname,
    'isadmin', account.isadmin,
    'city' , account.city,
    'street' , account.street, 
    'postalcode', account.postalcode,
    'phonenumber', account.phonenumber
    );

    return ROW(
    ROW(account.email,
      account.password,
      account.isadmin)::users_for_store.jwt_token,
      user_json
    )::users_for_store.auth_response;
  else
    return null;
  end if;
end;
$$ language plpgsql 
