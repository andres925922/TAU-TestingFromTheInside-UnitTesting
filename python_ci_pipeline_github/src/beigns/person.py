from __future__ import annotations

from typing import Collection

class Person:

    def __init__(
            self,
            name: str,
            age: int,
            *,
            jobs: Collection[str] | None = None
    ) -> None:
        self.age = age
        self.name = name
        self.jobs = jobs or []

    @property
    def forename(self):
        return self.name.split(" ")[0]
    
    @property
    def surname(self):
        surnamename = self.name.split(" ")[-1]
        return surnamename if surnamename != self.forename else None
    
    def celebrate_birthday(self):
        self.age += 1

    def add_job(self, job: str):
        self.jobs.append(job)