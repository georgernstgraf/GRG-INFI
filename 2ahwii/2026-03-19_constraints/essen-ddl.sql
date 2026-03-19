CREATE TABLE personneu (
    id int primary key,
    name text not null,
    id_lieblingsessen number CONSTRAINT fk_essen REFERENCES essen(id)
);

CREATE TABLE essenneu (id number primary key, essen text not null);