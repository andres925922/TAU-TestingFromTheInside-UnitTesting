import pytest

from src.beigns import Person

def test_init():
    person = Person("Andres Convertini", 32, jobs=["Mechanical Engineer"])
    assert person.name == "Andres Convertini"
    assert person.age == 32
    assert person.jobs == ["Mechanical Engineer"]