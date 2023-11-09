import json
import os


# function to add to JSON
def queue_up(new_data, filename="kafka/queue.json"):
    file_data = {"queue": []}

    # Check if file exists
    if os.path.isfile(filename):
        with open(filename, "r+") as file:
            # Load existing data into a dict.
            file_data = json.load(file)
            # Sets file's current position at offset.
            file.seek(0)
        # Join new_data with file_data inside queue
        file_data["queue"].append(new_data)

        with open(filename, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=4)
    else:
        file_data["queue"].append(new_data)
        with open(filename, "w") as file:
            # Convert back to json and write to file.
            json.dump(file_data, file, indent=4)
            return
