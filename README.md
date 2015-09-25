# firefoxos
formation firefox OS

Augustin
[github](https://github.com/autra)
[twitter](https://twitter.com/autra42)


[turn your phone in ioT board](http://janos.io)

Deploy for firefox os:
https://marketplace-dev.allizom.org/ account

Mulet
https://tools.taskcluster.net/index/artifacts/#gecko.v1.mozilla-central.latest.linux.mulet/gecko.v1.mozilla-central.latest.linux.mulet.opt

#Gaia
Apps of firefox os

https://github.com/mozilla-b2g/gaia 
Run modified/last gaia: 
in gaia directory:
 - make
 - run with "Profile Ready: please run [b2g|firefox] -profile /home/stagiaire/workspace/gaia/profile"

#Upgrade ROM of Flame device
https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/Phone_guide/Flame/Updating_your_Flame

base image
http://cds.w5v8t3u9.hwcdn.net/v18D_nightly_v4.zip

#Reflash last gaia & gecko
les images gaia + gecko pour v2.2 (buildé tous les jours)
https://ftp.mozilla.org/pub/mozilla.org/b2g/nightly/latest-mozilla-central-flame-kk-eng/
y télécharger gaia.zip + le b2g : b2g-37.0.en-US.android-arm.tar.gz
télécharger https://raw.githubusercontent.com/Mozilla-TWQA/B2G-flash-tool/master/shallow_flash.sh

#TODO app

http://buildingfirefoxos.com/



#Misc
Security
CSP (Content Security Policy)

Les contacts accessibilité coté mozilla
Eitan Isaacson  eeejay eitan@monotonous.org
le big boss de l’accessibilité coté Mozilla c’est Marco Zehe (mzehe@mozilla.com)       
sinon un contact qui parle français: Natalia sur irc    


Alcatel one touch fire E:
- 2.0 devrait être dispo en OTA
- rom dispo ici http://firefoxosguide.com/firefox-os/tutorial-flash-alcatel-onetouch-fire-firefox-os-v2-5-spark-enabled.html/ (2.5 spark) par contre pas de processus de build documenté (comment ont-il fait ?)
- alcatel fait des dump de leur device sur 
http://sourceforge.net/projects/alcatel/files/
ce qui peut servir de base à un fork
Des threads sur xda-developers semblent indiquere qu'il est possible de délocker le bootloader...

