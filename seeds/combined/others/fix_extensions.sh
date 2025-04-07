#!/bin/bash
# Enable nullglob so that the loop won't run with a literal pattern if no file matches.
shopt -s nullglob

# Loop through every regular file in the directory
for file in *; do
    [ -f "$file" ] || continue  # Skip if not a regular file

    # If the file already ends with a recognized extension, skip it.
    if [[ "$file" =~ \.(html|js)$ ]]; then
        continue
    fi

    # Check for a recognized extension anywhere in the name and append it if missing.
    if [[ "$file" =~ \.html ]]; then
        newname="${file}.html"
        echo "Renaming '$file' to '$newname'"
        mv -- "$file" "$newname"
    elif [[ "$file" =~ \.js ]]; then
        newname="${file}.js"
        echo "Renaming '$file' to '$newname'"
        mv -- "$file" "$newname"
    else
        echo "No recognized extension found in '$file'. Skipping."
    fi
done
