import os
import shutil

def replace_paths_in_file(file_path, new_folder):
    # Read the file
    with open(file_path, 'r') as file:
        file_content = file.read()
    
    # Replace the specified paths
    file_content = file_content.replace("../../toolkit/", "https://moldtelecom.md/mtc_evo_v2/toolkit/")
    file_content = file_content.replace("../../images/", "https://moldtelecom.md/mtc_evo_v2/images/")
    file_content = file_content.replace("../../files/", "https://moldtelecom.md/mtc_evo_v2/files/")
    
    # Create the new folder if it doesn't exist
    if not os.path.exists(new_folder):
        os.makedirs(new_folder)
    
    # Create the new file path
    new_file_path = os.path.join(new_folder, os.path.basename(file_path))
    
    # Write the modified content to the new file
    with open(new_file_path, 'w') as new_file:
        new_file.write(file_content)
    
    print(f"File has been processed and saved to {new_file_path}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: python script.py <file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    if not os.path.isfile(file_path):
        print(f"The file {file_path} does not exist.")
        sys.exit(1)
    
    # Define the new folder path
    new_folder = os.path.abspath(os.path.join(os.path.dirname(file_path), "../../production"))
    
    # Process the file
    replace_paths_in_file(file_path, new_folder)
