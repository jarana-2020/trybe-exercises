from exercise1 import list_values


def test_list_numbers_return_list():
    assert list_values(2) == [1, 2]


def test_list_number_return_fizz():
    assert list_values(3)[-1] == "Fizz"


def test_list_number_return_buzz():
    assert list_values(5)[-1] == "Buzz"


def test_list_number_return_fizzbuzz():
    assert list_values(15)[-1] == "FizzBuzz"
