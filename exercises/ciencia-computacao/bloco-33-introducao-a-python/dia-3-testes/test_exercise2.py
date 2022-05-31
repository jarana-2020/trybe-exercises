import pytest
from exercise2 import convert_expression


def test_convert_expression_return_222():
    assert convert_expression("ABC") == "222"


def test_convert_expression_return_333():
    assert convert_expression("DEF") == "333"


def test_convert_expression_return_444():
    assert convert_expression("GHI") == "444"


def test_convert_expression_return_555():
    assert convert_expression("JKL") == "555"


def test_convert_expression_return_666():
    assert convert_expression("MNO") == "666"


def test_convert_expression_return_777():
    assert convert_expression("PQR") == "777"


def test_convert_expression_return_888():
    assert convert_expression("STU") == "888"


def test_convert_expression_return_9999():
    assert convert_expression("WXYZ") == "9999"


def test_convert_expression_return_keeped():
    assert convert_expression("-01") == "-01"


def test_convert_expression_not_blank():
    with pytest.raises(ValueError):
        convert_expression("")


def test_convert_expression_invalid_character():
    with pytest.raises(ValueError):
        convert_expression("*")
