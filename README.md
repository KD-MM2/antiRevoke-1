# antiRevoke
This method protects your revoked certificate from Apple. That means you can hold the certificate alives forever and easily sign your apps.
## Disclaimer
* Your phone will be restored then you have to sign in by the Apple ID on your phone. If you forgot your Apple ID password, please stop here and just read for your knowledge.
*  I just show the way for block Apple from revoking certificates. I do not sell or distribute the certificate.
## Step 1: Turn your iPhone into Supervised mode
### Backup your phone
You can back up your iPhone by iTunes for Windows [x64](https://www.apple.com/itunes/download/win64/)/[x32](https://www.apple.com/itunes/download/win32/) or [3uTools](http://www.3u.com/). But you have to install 3uTools for the next steps.
### Edit backup by 3uTools
* Open 3uTools. Access `Tools box`, then click on `Backup/Restore`. In `all-data backups view`, if you backed up your phone by iTunes, you should add this backup into 3uTools by the `Add backup` button. Then, the recent backup appear. Click on `Pro mode`.

![](https://github.com/giantrule/antiRevoke/raw/master/imgs/01.jpg)

* Try to find and access to the file `CloudConfigurationDetails.plist` by this direction `SysSharedContainerDomain-systemgroup.com.apple.configurationprofiles`/`Library`/`ConfigurationProfiles`.
* Open `CloudConfigurationDetails.plist`, change value of `<key>IsSupervised</key><false/>` from `<false/>` to `<true/>`. Then click on `Save` button and close it. Re-open this file and check again to make sure you changed the value.

![](https://github.com/giantrule/antiRevoke/raw/master/imgs/02.jpg)

### Restore your iPhone
On your phone, open `Settings` then turn off `Find My iPhone`. If you don't know where to do that, you can scroll down from the top of Settings screen to show the search bar. Type `find` then you can see `Find My iPhone` from the search result.
Make sure you chose the right backup that modified recently. Click on `Restore all data` then follow the 3uTools instruction.
After the restore process, your phone will restart and you have to sign in your Apple ID after that. Finish the setup steps then open `Settings`, you will see the supervision mode notice.

![](https://github.com/giantrule/antiRevoke/raw/master/imgs/03.png)

If the process is fail, you can not see the notice about supervised mode. I have no idea about this error. I tried for my friend many times but I can not figure out what is the reason. My advice is repeat the whole process from backing up, editing backup then restoring. If it still didn't work. I think you should reset your phone to a new phone (erase all settings and content) then start again.

## Step 2: Install suitable profile
* If you only want to block the revocation from Apple, let's install the normal anti-revoke profile `antiRevoke-giantrule.mobileconfig`. On mobile, Click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/antiRevoke-giantrule.mobileconfig)
* If you want block both certificate revocation and iOs update, install the `antiRevoke-blockUpdate-giantrule.mobileconfig` profile. On mobile, Click [here](https://raw.githubusercontent.com/giantrule/antiRevoke/master/antiRevoke-blockUpdate-giantrule.mobileconfig)
* I'm trying to make an other profile for blocking some ads services. But it is still on the go.
## Step 3: Install your app without revocation form Apple
Yeah. It's so simple step. Install your app with a certificate, even a revoked certificate. Try it.

![](https://github.com/giantrule/antiRevoke/raw/master/imgs/04.png)

## If it helps you, you can give me a cup of coffee
![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/ltn119412)

### Credit
Modded from https://github.com/langkhach270389/Antirevoke-OTABlocked-Adsblock
