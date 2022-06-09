mkdir -p <dir>/<dir>	Create nested folders
ls -ld	Display the default permission for a home directory

## Disk Utility
du	List usage for each subdirectory and its contents
du -sh [folder]	Human readable output of all files in a directory
du -sk* | sort -nr	List files and folders, totaling the size including the subfolders. Replace sk* with sm* to list directories in MB
mkdir <dir1> <dir2> <dir3>	Create several folders at once

## Permissions
chmod 755 <file>	Change the permission of a file to 755
chmod -R 600 <dir>	Change the permission of a folder (and its contents) to 600
chown <user>:<group> <file>	Change the ownership of a file to user and group. Add -R to include folder contents

## Processes
ps -ax	Output currently running processes. Here, a shows processes from all users and x shows processes that are not connected with the Terminal

## Network
ping <host>	Ping host and display status
whois <domain>	Output whois info for a domain
curl -O <url/to/file>	Download file via HTTP, HTTPS, or FTP
ssh <username>@<host>	Establish SSH connection to <host> with user <username>
scp <file><user>@<host>:/remote/path	Copy <file> to a remote <host>
arp -a	View a list of all devices on your local network. It will show you the IP and MAC address of all the devices
ifconfig en0	View your device IP and MAC address
traceroute [hostname]	Identify the path and the hops traversed by the packets from your device to the destination address

## CURL
curl -O <url/to/file>	Download file via HTTP, HTTPS, or FTP
curl -O -C - <url/to/file>  Partially downloaded file
curl -L http://www.facebook.com/  Follow redirects
curl -L --max-redirs 700 example.com   max redirects
curl -v https://www.booleanworld.com/   view request header and connection details

## Brew
### Formula 
- Ruby based file that gives instructions on how to download and install a package
### Cask 
- like a formula put for GUI and closed source software
### Commands
brew doctor	Check brew for potential problems
brew help	List of useful homebrew formula and cask commands
brew install <formula>|<cask>	Install a formula or cask
brew uninstall <formula>|cask>	Uninstall a formula or cask
brew list --formula	List only installed formulas
brew list --cask	List only installed cask
brew deps <formula>|<cask>	List all the dependencies of a formula or cask
brew search text|/regex/	Search formula or cask through regex
brew upgrade <formula>|<cask>	Upgrade the formula or cask
brew outdated <formula>|<cask>	Search for outdated formula or cask
brew outdated --formula	Search for outdated formula
brew outdated --cask	Search for outdated cask
brew pin [installed_formula]	Pin a formula from getting upgraded
brew unpin [installed_formula]	Unpin to upgrade a package
brew cleanup	Remove stale lock files and outdated packages for all formula and casks.

## ENV vars and paths
printenv	                                    Display a list of currently set environment variables. Also tells you which shell you're using
$echo	                                        Tells the terminal to print something and show it to you
echo $PATH	                                    Check the value of the PATH variable which storea a list of directories with executable files
echo $PATH >path.txt	                        Export the path directory to a text file
export PATH=$PATH:absolute/path to/program/	    Execute a program via terminal only in your current session. If you use a program regularly, add the path to shell configuration file.