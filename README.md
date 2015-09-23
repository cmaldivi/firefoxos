# firefoxos
formation firefox OS

Augustin
[github](https://github.com/autra)
[twitter](https://twitter.com/autra42)

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
https://ftp.mozilla.org/pub/mozilla.org/b2g/nightly/latest-mozilla-b2g37_v2_2-flame-kk/
y télécharger gaia.zip + le b2g
télécharger https://raw.githubusercontent.com/Mozilla-TWQA/B2G-flash-tool/master/shallow_flash.sh
exécuter ./shallow_flash.sh --gecko=<le fichier b2G> --gaia=<le fichier gaia.zip>

#Misc
Security
CSP (Content Security Policy)
