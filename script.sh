#!/bin/bash
#replace all spaces with underscores
ls *.bmp | while read -r FILE
do
    mv -v "$FILE" `echo $FILE | tr ' ' '_' `
done
#convert files to right directory
ls *.bmp | while read -r file
do 
	dir=`echo $file | cut -d "_" -f1`

	if [ -d "$dir" ]; then
		echo "converting $file"
		convert  "$file" -resize x540 "$dir/$file.png"
	else
		mkdir "$dir"
		echo "converting $file"
		convert  "$file" -resize x540 "$dir/$file.png"
	fi
done
#make gifs and stripes
ls -d */ | while read -r dir
do
	realDir=`echo "$dir" | tr -d '/'`
	echo "making gif for $realDir" 
	convert -delay 100 -dispose Background "$dir"*.png -loop 0 "$realDir"/"$realDir".gif
	echo "making vertical strip for $realDir"
	convert "$realDir"/"$realDir"*.png -crop 10x0+480+0 +append "$realDir"/strip-vertical.png
	echo "making horizontal strip for $realDir"
	convert "$realDir"/"$realDir"*.png -crop 0x10+0+270 -append "$realDir"/strip-horizontal.png
done
echo "done"

