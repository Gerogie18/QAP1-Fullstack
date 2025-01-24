# QAP1-Fullstack


# Password Generator

---

    A simple command line password generator.  For ease of use defaults to all character variations and a length of 8.  Due to how it is written there is preditability in the first 4 characters.

Note:

- Character flags all default to true if no character flags are provided,
- if one character flag is specified, the others will default to false.
- if a number less than 4 is provided no password will be generated.

## Flags:

| Short Flag      | Long Flag             | Description                          | Default | Minimum |
| --------------- | --------------------- | ------------------------------------ | ------- | ------- |
| `-u`          | `--upper`           | Include uppercase characters         | true    |         |
| `-n`          | `--number`          | Include numbers                      | true    |         |
| `-s`          | `--special`         | include special characters           | true    |         |
| `-l=<length>` | `--length=<length>` | Determine the length of the password | 8       | 4       |
| `-h<br>``?`   | `--help`            | Brings up help message               |         |         |
