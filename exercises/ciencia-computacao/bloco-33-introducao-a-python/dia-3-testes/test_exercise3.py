import pytest

from exercise3 import valid_email


def test_valid_email_error_name_first_letter():
    with pytest.raises(ValueError):
        valid_email("*ulio@yahoo.com")


def test_valid_email_error_name_characters():
    with pytest.raises(ValueError):
        valid_email("j*ulio@yahoo.com")


def test_valid_email_error_name_site():
    with pytest.raises(ValueError):
        valid_email("julio@*ahoo.com")


def test_valid_email_error_length_extension():
    with pytest.raises(ValueError):
        valid_email("julio@yahoo.comm")
