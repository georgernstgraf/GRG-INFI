CREATE TABLE personneu (
    id int primary key,
    name text not null,
    id_lieblingsessen number CONSTRAINT fk_essen REFERENCES essen(id)
);