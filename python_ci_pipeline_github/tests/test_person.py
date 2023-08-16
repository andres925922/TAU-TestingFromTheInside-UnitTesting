import pytest

from src.beigns import Person

@pytest.fixture()
def person() -> Person:
    return Person("Andres Convertini", 32, jobs=["Mechanical Engineer"])


def test_init(person: Person):
    assert person.name == "Andres Convertini"
    assert person.age == 32
    assert person.jobs == ["Mechanical Engineer"]


def test_forename(person: Person):
    assert person.forename == "Andres"

def test_surname(person: Person):
    assert person.surname == "Convertini"

def test_surname_none(person: Person):
    person.name = "Andres"
    assert not person.surname

def test_celebrate_birthday(person: Person):
    person.celebrate_birthday()
    assert person.age == 33

def test_add_job(person: Person):
    person.add_job("Software engineer")
    assert person.jobs == ["Mechanical Engineer", "Software engineer"]