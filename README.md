# giantrule | Anti-Revocation - Blocking Ads - Blocking iOS Update for Your iDevices
This method protects your revoked certificate from Apple. That means you can hold the certificate alives forever and easily sign your apps.
### Disclaimer
* Your phone will be restored then you have to sign in by the Apple ID on your phone. If you forgot your Apple ID password, please stop here and just read for your knowledge. I will not accept responsibility for any iCloud trouble or damage with your phone. 
* I just show the way for block Apple from revoking certificates. I do not sell or distribute the certificate.
## Step 1: Turn your iPhone into Supervised mode
### Backup your phone
* Connect your phone to the computer
* You can back up your iPhone by iTunes for Windows [x64](https://www.apple.com/itunes/download/win64/)/[x32](https://www.apple.com/itunes/download/win32/) or [3uTools](http://www.3u.com/). But you have to install 3uTools for the next steps.
### Edit backup by 3uTools
* Open 3uTools. Access `Tools box`, then click on `Backup/Restore`. In `all-data backups view`, if you backed up your phone by iTunes, you should add this backup into 3uTools by the `Add backup` button. Browse to the following directory `C:\Users\<Your username>\AppData\Roaming\Apple Computer\MobileSync\Backup`. After that, you can see the recent backup. Click on `Pro mode`.

<p align="center">
  <img src="https://github.com/giantrule/antiRevoke/raw/master/imgs/01.jpg">
</p>


* Try to find and access to the file `CloudConfigurationDetails.plist` by this direction `SysSharedContainerDomain-systemgroup.com.apple.configurationprofiles`/`Library`/`ConfigurationProfiles`.
* Open `CloudConfigurationDetails.plist`, change value of `<key>IsSupervised</key><false/>` from `<false/>` to `<true/>`. Then click on `Save` button and close it. Re-open this file and check again to make sure you changed the value.

<p align="center">
  <img src="https://github.com/giantrule/antiRevoke/raw/master/imgs/02.jpg">
</p>

### Restore your iPhone
* Connect your phone to the computer
* On your phone, open `Settings` then turn off `Find My iPhone`. If you don't know where to do that, you can scroll down from the top of Settings screen to show the search bar. Type `find` then you can see `Find My iPhone` from the search result.
* Make sure you chose the right backup that modified recently. Click on `Restore all data` then follow the 3uTools instruction.
* After the restore process, your phone will restart and you have to sign in your Apple ID after that. Finish the setup steps then open `Settings`, you will see the supervision mode notice.

<p align="center">
  <img src="https://github.com/giantrule/antiRevoke/raw/master/imgs/03.png">
</p>

* If the process is fail, you can not see the notice about supervised mode. I have no idea about the reason why it's fail. I tried for my friend many times but I can not figure out. My advice is repeat the whole process from backing up, editing backup then restoring.
* If it still didn't work. I think you should reset your phone to a new phone (erase all settings and contents) then start again. Sorry for that.

## Step 2: Install your desired profile
* If you only want to block the revocation from Apple, let's install the normal anti-revoke profile `giantrule-RA.mobileconfig`. On mobile, click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/giantrule-RA.mobileconfig).
* If you want block both certificate revocation and iOs update, install the `giantrule-RAU.mobileconfig` profile. On mobile, click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/giantrule-RAU.mobileconfig).
* I'm trying to make an other profile for blocking some ads services. But it is still on the go.
## Step 3: Install your app without revocation from Apple
Yeah. It's a very simple step. Install your app by a certificate, even a revoked certificate. Try it.

<p align="center">
  <img src="https://github.com/giantrule/antiRevoke/raw/master/imgs/04.png">
</p>

## Step 4: Block Apple's certificate authenticator server
* After installing your apps, open them at the first time for verifying your sideload apps and their certificate with Apple.
* Then, block this Apple's server to decrease the revocation.
* If you installed the `giantrule-RA.mobileconfig`. Keep going on with the `giantrule-RAP.mobileconfig`. On mobile, click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/giantrule-RAP.mobileconfig).
* Otherwises, if you installed the `giantrule-RAU.mobileconfig` profile, continue with the `giantrule-RAUP.mobileconfig`. On mobile, click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/giantrule-RAUP.mobileconfig).

## P/s
In cases you want to install a new app, please repeate at Step 2 to 4.

## If it helps you, you can give me a cup of coffee
[![Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/ltn119412)

### © [giantrule](https://github.com/giantrule/antiRevoke/) 2020
