import yaml

app_conf_path = "app_conf.yml"

with open(app_conf_path, "r") as f:
    appConfig = yaml.safe_load(f.read())

db_config = {
    "host": "localhost",
    "user": "root",
    "password": appConfig["sql-pass"],
    "database": "eyecameradb",
}
