#!/bin/bash

# Starting date (April 1, 2023)
start_date="2023-04-01T12:00:00"

# Loop through months from April to September
for month in {4..9}; do
  # Format the commit date
  commit_date=$(date -d "$start_date +$((month - 4)) months" +"%Y-%m-%dT12:00:00")
  echo "Creating commit for $commit_date"
  
  # Set the commit date and author date
  GIT_AUTHOR_DATE="$commit_date" GIT_COMMITTER_DATE="$commit_date" git commit --author="Fake Author <fakeemail@example.com>" -m "Fake commit for month $month"
done
