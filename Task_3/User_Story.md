# User Story

## Your Task:

A user story is still unprocessed. Since you are done with your topics, you grab the story. Create the code for the required function.

## Task: Implement Pin Store Functionality

As an admin, I want to store pins for my councils to secure them afterwards.

## Background

Implement a pin store that saves pin codes that are 5 digits long. For example, "39271" is a valid pin code.

## Acceptance Criteria

A pin is considered valid when it satisfies the following criteria:

- It consists of only digits/numbers.
- It has exactly 5 digits.
- It is not all the same (e.g., '11111').
- It does not have ascending or descending sequences (e.g., '12345' or '54321').
- It consists of more than or exactly 4 different digits (e.g., '11134' is not allowed, but '11378' and '97531' are allowed).
- Digits can be used twice, but not more often (e.g., '18961' is valid, but '18911' is not).

## Code Implementation

Please implement the required function to validate the pin codes according to the acceptance criteria.
