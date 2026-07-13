# BIG ER 

## N:M Relationships in bigER

### A:
I have saved the inferred ER diagram to `2026-04-16_üben_mit_bigER/buecher.erd`.

The model includes:
- **5 Entities**: `mitarbeiter`, `leser`, `buch`, `exemplar`, and `ausleihe`.
- **4 Relationships**: 
    - `ExemplarBestand` (Buch 1:N Exemplar)
    - `LeserLeihe` (Leser 1:N Ausleihe)
    - `ExemplarLeihe` (Exemplar 1:N Ausleihe)
    - `Bearbeitung` (Mitarbeiter 1:N Ausleihe)

You can now open this file in VSCode with the bigER plugin to view the diagram.


### Q:
how would the syntax for an n:m relationship look like in bigER?


### A:
In the **bigER** plugin, an **n:m (many-to-many)** relationship is defined by specifying the cardinalities `[N]` and `[M]` (or `[M]` and `[N]`) on both sides of the relationship.

### Syntax for N:M Relationship
If you have two entities, for example `Student` and `Kurs`, where many students can attend many courses, the syntax looks like this:

```erd
relationship Belegt {
    student [N] -> kurs [M]
}
```

### Key Components:
1.  **`relationship Name { ... }`**: Defines the relationship block.
2.  **`[N]` and `[M]`**: These are the cardinalities. In bigER, `1`, `N`, and `M` are the standard indicators for "one" and "many".
3.  **`->`**: Connects the participating entities.
4.  **Attributes (Optional)**: If the n:m relationship has its own attributes (like a `grade` or `date`), you can list them inside the block:
    ```erd
    relationship Belegt {
        student [N] -> kurs [M]
        note
        datum
    }
    ```

### Example in the context of your library:
If you wanted to model a direct many-to-many relationship between `Autor` and `Buch` (since a book can have multiple authors and an author can write multiple books), it would look like this:

```erd
entity autor {
    id_autor key
    name
}

entity buch {
    id_buch key
    titel
}

relationship Autorenschaft {
    autor [N] -> buch [M]
}
```

### Visualizing in VSCode:
When using the `notation=default` (as in your current file), this will typically display the `N` and `M` labels near the connection lines in the diagram preview. If you switch to `notation=crowsfoot`, you would use syntax like `[1+]` or `[0+]` instead.


### Q:
ok i think i understand (correct me pls): a) if it is JUST n:m without extra data, i use it like autorenschaft you showed me. but b) as soon as I put the FIRST extra attribute on the connecting table, it immediately becomes a new ENTITIY and not a relation. right?


### A:
You are **conceptually correct** in terms of how databases work, but in **ER modeling syntax**, you have a choice! 

Here is the breakdown of how to handle "extra data" on a connection:

### 1. The "Relationship with Attributes" (ER-Way)
In an ER diagram, a relationship **can** have attributes without becoming an entity. This is often used for things like "Date of purchase" or "Grade in a course."

**BigER Syntax:**
```erd
relationship Belegt {
    student [N] -> kurs [M]
    note       // Extra attribute
    datum      // Extra attribute
}
```
*   **Pros:** It keeps the diagram simple and shows that the data *only* exists because of the connection between a student and a course.

---

### 2. The "Associative Entity" (Implementation-Way)
Once the relationship becomes "heavy" (lots of attributes) or **if another entity needs to point to it**, you convert it into an entity. This is what happened in your `loesung.sql` with **`ausleihe`**.

Technically, a "Loan" (Ausleihe) is just a relationship between a `Leser` and an `Exemplar`. But because it has a lot of data (dates, employee-ID, etc.), we model it as an entity.

**BigER Syntax (How you have it now):**
```erd
entity ausleihe {
    id_ausleihe key
    ausleihdatum
    // ... other data
}

relationship LeserLeihe {
    leser [1] -> ausleihe [N]
}
relationship ExemplarLeihe {
    exemplar [1] -> ausleihe [N]
}
```

---

### When should you definitely switch to an Entity?
You **must** change it from a `relationship` to an `entity` if:
1.  **Identity:** The connection needs its own ID (like `id_ausleihe`).
2.  **Referencing:** Another table needs to link to it (e.g., if you had a `Mahnung` (Fine) table that needs to reference a specific `Ausleihe`).
3.  **Complex Logic:** It involves more than two entities (though "Ternary" relationships exist, they are messy).

### Summary:
*   **Small data?** Use a `relationship` with attributes.
*   **Business object?** (like a Contract, a Loan, or an Order): Make it an **Entity** with 1:N relationships.

In your specific library case, **`ausleihe`** was right to be an entity because it's a central part of the system, whereas something like **`autorenschaft`** (Author writes Book) usually stays a pure relationship unless you need to track "Contribution Percentage" or something similar.

## nullable attributes in bigER

### Q:
back to ER: how to annotate nullables?


### A:
In the **bigER** plugin, you annotate attributes by adding a keyword after the attribute name within the entity block.

To mark an attribute as **nullable (optional)**, you use the keyword **`optional`**.

### Syntax for Attributes
Here is how you use the different attribute modifiers in bigER:

```erd
entity beispiel {
    id key               // Primary Key (Mandatory/Not Null)
    name                 // Standard Attribute (Mandatory/Not Null)
    telefon optional     // Nullable / Optional Attribute
    alter derived        // Derived Attribute (e.g., calculated from birthdate)
    hobby multi-valued   // Multi-valued Attribute
}
```

### Supported Keywords:
*   **`key`**: Marks the attribute as a primary key.
*   **`optional`**: Marks the attribute as nullable/optional.
*   **`derived`**: Marks the attribute as derived (usually shown with a dashed oval in Chen notation).
*   **`multi-valued`**: Marks the attribute as multi-valued (shown with a double oval).
*   **`partial-key`**: Used for weak entities to mark a discriminator.

### Example for your Library Model:
In your `ausleihe` entity, the `rueckgabedatum` is nullable in your SQL (`rueckgabedatum DATE`), so you should update it like this:

```erd
entity ausleihe {
    id_ausleihe key
    ausleihdatum
    rueckgabedatum optional    // <--- Mark as nullable here
    faelligkeitsdatum
}
```

### Visual Difference:
In the diagram preview:
- **Mandatory** attributes (default) are usually drawn as regular ovals (Chen) or with standard text.
- **Optional** attributes are often marked with an `(O)` or specific symbols depending on the `notation` setting (e.g., in Crow's Foot notation, it affects the circle/line at the end of relationships).



