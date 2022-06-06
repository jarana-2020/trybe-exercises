# Exercício 3 Faça uma função que valide um e-mail, lançando uma exceção
# quando o valor for inválido. Endereços de e-mail válidos
# devem seguir as seguintes regras:
# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras,
# dígitos, traços e underscores (_);
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.


def valid_email(email):

    email_separeted = email.split("@")
    name_user = email_separeted[0]
    site_and_extension = email_separeted[1].split(".")
    name_site = site_and_extension[0]
    extension = site_and_extension[1]

    if not name_user[0].isalpha():
        raise ValueError("The name should starts with a letter")

    for char in name_user:
        if not char.isalpha() and not char.isdigit() and char not in ("-_"):
            raise ValueError(
                "The name should contains only letter,] number,"
                "dashes or underscore"
            )
    for char in name_site:
        if not char.isalpha() and not char.isdigit():
            raise ValueError("The name of site should be letter or number")
    if len(extension) > 3:
        raise ValueError("The extension shold maximum length 3")

    return None
