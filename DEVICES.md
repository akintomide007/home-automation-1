Device address overview
=======================

|       Device       |     Hostname    |        Mac        |      IPv4     |
| ------------------ | --------------- | ----------------- | ------------- |
| Router             | router.lan      |                   | 192.168.1.1   |
| Mac Book Pro Wim   | laptop1.lan     | 90:27:e4:e9:13:b4 | 192.168.1.110 |
| Netbook            | laptop2.lan     |                   | 192.168.1.111 |
| Mac Mini HTPC      | media.lan       | 3c:07:54:5f:de:eb | 192.168.1.112 |
| Playstation        | playstation.lan | 28:0d:fc:db:0c:97 | 192.168.1.113 |
| Digibox1           | digibox1.lan    | 68:63:59:24:b8:4b | 192.168.1.114 |
| Server             | server.lan      | 00:1c:c4:43:eb:74 | 192.168.1.115 |
| Server iLO         | server-ilo.lan  | 00:1c:c4:43:eb:75 | 192.168.1.116 |
|                    |                 |                   | 192.168.1.117 |
|                    |                 |                   | 192.168.1.118 |
|                    |                 |                   | 192.168.1.119 |
| Raspberry Pi       | pi.lan          |                   | 192.168.1.120 |
| Living Arduino     | arduino1.lan    |                   | 192.168.1.121 |
| Terras Arduino     | arduino2.lan    |                   | 192.168.1.122 |
| Greenhouse arduino | arduino3.lan    |                   | 192.168.1.123 |
|                    |                 |                   | 192.168.1.124 |
|                    |                 |                   | 192.168.1.125 |
|                    |                 |                   | 192.168.1.126 |
|                    |                 |                   | 192.168.1.127 |
|                    |                 |                   | 192.168.1.128 |
|                    |                 |                   | 192.168.1.129 |
| iPhone Wim         | wim-phone.lan   | a0:ed:cd:cc:61:60 | 192.168.1.130 |
| iPhone Neera       | neera-phone.lan | 54:72:4f:4e:9e:1a | 192.168.1.131 |
| iPad Neera         | ipad1.lan       | 40:30:04:e9:27:71 | 192.168.1.132 |
|                    |                 |                   | 192.168.1.133 |
|                    |                 |                   | 192.168.1.134 |
|                    |                 |                   | 192.168.1.135 |
|                    |                 |                   | 192.168.1.136 |
|                    |                 |                   | 192.168.1.137 |
|                    |                 |                   | 192.168.1.138 |
|                    |                 |                   | 192.168.1.139 |
| Airport Express 1  | airport1.lan    |                   | 192.168.1.140 |

Router Hosts file configuration
-------------------------------
This is the hosts file that can be used in the OpenWRT router.

	192.168.1.1 router.lan
	192.168.1.1 www.router.lan
	192.168.1.110 laptop1.lan
	192.168.1.110 www.laptop1.lan
	192.168.1.111 laptop2.lan
	192.168.1.111 www.laptop2.lan
	192.168.1.112 media.lan
	192.168.1.112 www.media.lan
	192.168.1.120 pi.lan
	192.168.1.120 www.pi.lan
	192.168.1.121 arduino1.lan
	192.168.1.121 www.arduino1.lan
	192.168.1.122 arduino2.lan
	192.168.1.122 www.arduino2.lan
	192.168.1.123 arduino3.lan
	192.168.1.123 www.arduino3.lan
	192.168.1.130 wim-phone.lan
	192.168.1.130 www.wim-phone.lan
	192.168.1.131 neera-phone.lan
	192.168.1.131 www.neera-phone.lan
	192.168.1.132 ipad1.lan
	192.168.1.132 www.ipad1.lan


Case
----
http://be.farnell.com/pro-power/g17083ubk/case-19-abs-3u-black/dp/1526725

Broadcast message through sonos speakers
----------------------------------------
* Generate audio file from text (echo "This is a test message" | espeak --stdin --stdout > myaudio.wav)
* Send wav file to sonos speakers
