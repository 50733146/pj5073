var tipuesearch = {"pages": [{'title': 'About', 'text': 'Introduction to Automatic Control System.pdf \n 網際機電整合控制系統設計案例研究 \n A Case Study on the Design of Web-based Mechatronic Automatic Control System \n Members: \n 50733105 \n 50733152 \n 507331 \n 507331 \n Methodology: \n \n Use  NX12 ,  Onshape  and  Solvespace  to create system part assembly \n STL  to  CoppeliaSim \n Classic Control to Modern Control system design \n Flask + uwsgi on Ubuntu and Windows 10 2004 \n Machine Learning and Optimal Control System Design \n \n', 'tags': '', 'url': 'About.html'}, {'title': '進行步驟', 'text': '1. 閱讀 \n 2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n 了解基本回授, 控制名詞與原理 \n 2. 閱讀 \n 2012 Mechatronic Systems:\xa0 \n https://link.springer.com/book/10.1007/978-3-642-22324-2 \xa0 \n 了解機電系統與傳統與現代設計方法, 導入 Sympy 與  https://github.com/python-control/python-control,   2019 Python for Control.pdf  與  Symbolic Computing in Python.pdf \n 3. 學習如何安裝配置 Ubuntu 20.04 實體與虛擬主機, 將  CMSiMDE  靜態與動態網站分別配置在實體與虛擬伺服器上. 學習如何將動態 Flask 程式部署至  Heroku. \n 4. 在 Ubuntu 20.04 伺服器上安裝 ubuntu-desktop 與  Xrdp , 安裝  CoppeliaSim , 透過 Remote Desktop Client 連至遠端伺服器, 以 interactive 及  headless  開啟  CoppeliaSim  場景檔案, 進行單機與網際  Python Remote API  模擬控制  CoppeliaSim  場景中的機電系統. \n 5. 將  https://github.com/mdecourse/vrep_inverted_pendulum  改為 Python3 以及 CoppeliaSim 4.1.0 rev1 版本 (若要在 Acer E5200 電腦上執行, 必須使用  V-rep 3.6.1 版 ) 相容. 以下為參考資料: \n https://github.com/mdecourse/vrep-stuff \n inverted pendulum system modeling \n simulation of the inverted pendulum.pdf \n solve the inverted pendulum problem using DQN algorithm \n https://in.mathworks.com/help/control/ug/control-of-an-inverted-pendulum-on-a-cart.html \n 其中的機電系統 3D 零組件可以採  NX12 ,  Onshape  或  Solvespace  繪製.', 'tags': '', 'url': '進行步驟.html'}, {'title': 'ebook1', 'text': '2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n Control and Feedback are everywhere. \n Feedback is information obtained from a system used to change its behavior. \n A system is causal (符合因果關係) when for any signal in the behavior the future cannot influence the past of the signal. Because in our discussions signals are functions of time, causality (因果關係) is an all too natural a property. It is indeed not conceivable that the presently experienced shower temperature could possibly depend on future positions of the water taps. Indeed, our shower is a causal system (因果系統). \n', 'tags': '', 'url': 'ebook1.html'}, {'title': 'Ebooks', 'text': '2010 Feedback and Control for Everyone: \n https://link.springer.com/book/10.1007/978-3-642-03446-6 \n 2012 Mechatronic Systems:\xa0 \n https://link.springer.com/book/10.1007/978-3-642-22324-2 \xa0 \n 2015 Feedback Control: \n https://link.springer.com/book/10.1007/978-1-4471-6675-7 \n 2018\xa0Reinforcement Learning for Optimal Feedback Control: \n https://link.springer.com/book/10.1007/978-3-319-78384-0 \xa0 \n 2019 Python for Control.pdf \n 2020 Feedback: \n https://link.springer.com/book/10.1007/978-3-030-34839-7 \xa0 \n', 'tags': '', 'url': 'Ebooks.html'}, {'title': 'Feedback', 'text': "針對 CoppeliaSim 中 Python Remote API 不提供的功能, 可以透過 Lua 製作, 然後再以  https://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm#simxCallScriptFunction  呼叫. 相關討論請參考  https://forum.coppeliarobotics.com/viewtopic.php?t=7699 \n 以下的 Inverted Pedulum 控制模擬可以視為專題 Task 之一: \n https://github.com/mdecourse/vrep_inverted_pendulum  採用舊版的 Python2 以及舊版的 V-rep 製作, 可以嘗試改為 Python3 以及 CoppeliaSim 4.1.0 rev1 版本相容. \n https://github.com/mdecourse/vrep-stuff \n inverted pendulum system modeling \n simulation of the inverted pendulum.pdf \n solve the inverted pendulum problem using DQN algorithm \n https://in.mathworks.com/help/control/ug/control-of-an-inverted-pendulum-on-a-cart.html \n \xa0磁浮控制系統: \n Magnetic levitation control.pdf \n Controller Design for a Magnetic Levitation Kit usingOpenModelica’s Integration with the Julia Language.pdf \n CoppeliaSim Lua feedback PID Control: \n function saturate(x,thr)\n    if x>thr then return thr end\n    if x<-thr then return -thr end\n    return x\nend\n\nfunction PID_create(Kp,Ki,Kd)\n    pid={}\n    pid.pre_error=0.0\n    pid.integral=0.0\n    pid.Kp=Kp\n    pid.Ki=Ki\n    pid.Kd=Kd\n    return pid\nend\n\nfunction PID(pid, setpoint, actual_position, dt)\n    error=setpoint-actual_position\n    if pid.Ki>0.0 then\n        pid.integral=pid.integral+error*dt\n    end\n    derivative=(error-pid.pre_error)/dt\n    output=pid.Kp*error+saturate(pid.Ki*pid.integral,1000)+pid.Kd*derivative\n    output=saturate(output,2000)\n    pid.pre_error=error\n    return output\nend\n\nif (sim_call_type==sim.syscb_init) then\n    --graph=sim.getObjectHandle('Graph')\n    pjoint=sim.getObjectHandle('pjoint')\n    rjoint1=sim.getObjectHandle('rjoint1')\n    pad=sim.getObjectHandle('pad')\n    pidRot=PID_create(64.05,34.65,0.709)\n    pidPos=PID_create(54,0,0.629)\n    sim.addStatusbarMessage('angle controller = { P='..pidRot.Kp..'  I='..pidRot.Ki..'  D='..pidRot.Kd..' }   horizontal controller = { P='..pidPos.Kp..'  I='..pidPos.Ki..'  D='..pidPos.Kd..' }')\nend\n\nif (sim_call_type==sim.syscb_actuation) then  \n    dt=sim.getSimulationTimeStep()\n    u_angle=PID(pidRot, 0, sim.getJointPosition(rjoint1), dt)\n    u_pos=PID(pidPos, 0, sim.getJointPosition(pjoint), dt)\n   -- sim.setGraphUserData(graph,'e_ang',pid1.pre_error)\n   -- sim.setGraphUserData(graph,'e_pos',pid2.pre_error)\n    u=u_angle-u_pos\n    sim.setJointTargetVelocity(pjoint,u)\nend \n", 'tags': '', 'url': 'Feedback.html'}, {'title': 'CMSiMDE', 'text': 'https://github.com/mdecourse/cmsimde \xa0是一套以 Python + Flask 建構的網際內容管理系統, 以單人管理的模式建立, 其中包含動態網頁系統, 靜態網頁系統, Pelican 網誌與 Reveal.js 網際簡報系統. \n https://github.com/mdecourse/cmsimde \xa0執行需要: \n pip install flask flask_cors lxml bs4 markdown pelican leo \n 等模組.', 'tags': '', 'url': 'CMSiMDE.html'}, {'title': 'Git', 'text': '常用 Git 指令: \n git clone --recurse-submodules  https://github.com/mdecourse/cp2020.git \n git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n git remote add origin https://github.com/mdecourse/wcm1kmolinfo.git git add . git commit -m "message" git push -u --allow-unrelated-histories origin master \n git push --set-upstream origin master', 'tags': '', 'url': 'Git.html'}, {'title': 'Windows', 'text': 'Windows 10 64 位元電腦中的可攜程式環境\xa0 \n NX 高端電腦輔助機械設計套件 \n 登入 @gm 帳號, \xa0 下載 NX12 可攜版 \xa0(949MB) \n 配置 2004 版本後測試 Python 可攜程式環境, 用來建立  CMSiMDE  近端工作環境 (含  NX12  與  CoppeliaSim  操作) \n 在 2004 版次中安裝 WSL 2, 安裝 Ubuntu 20.04 後啟用  CMSiMDE  工作環境\xa0 \xa0(含  NX12  與  CoppeliaSim  操作) \n 建立  Virtualbox   NX12  認證主機 \n', 'tags': '', 'url': 'Windows.html'}, {'title': 'Ubuntu', 'text': "在  Virtualbox  與實體主機中利用 純 IPv6 網址, 配置  Ubuntu  20.04 部署動態與靜態  CMSiMDE  網站 (含  Let's Encrypt  https 設置). \n 在  Virtualbox  與實體主機中利用 純 IPv6 網址,\xa0配置  CoppeliaSim  模擬系統, 用於建立虛擬機電控制系統. \n", 'tags': '', 'url': 'Ubuntu.html'}, {'title': 'Heorku', 'text': '將近端與自架伺服器中的  CMSiMDE  靜態網頁部署至  Heroku . \n 利用  Heroku  中的動態 Flask 程式與自架伺服器中的  CoppeliaSim  模擬系統互動. \n Heroku 操作 \n 登入 @gm  下載 Heroku cli 可攜.7z , 解開壓縮檔案後, 在 start.bat 中將 Heroku bin 設定指令搜尋路徑, 重新啟動後, 以 heroku version 確定指令可以正常執行後, heroku login 成功後, 登入帳號密碼會存入 home/_netrc 中. 之後便可直接透過 heroku cli 指令直接對遠端主機下命令.', 'tags': '', 'url': 'Heorku.html'}, {'title': 'Certbot', 'text': 'https://letsencrypt.org/ \xa0 \n 以下為實體主機配置 Certbot 時傳回資料: \n IMPORTANT NOTES: \xa0- Congratulations! Your certificate and chain have been saved at: \xa0\xa0 /etc/letsencrypt/live/jcad.kmol.info/fullchain.pem \xa0\xa0 Your key file has been saved at: \xa0\xa0 /etc/letsencrypt/live/jcad.kmol.info/privkey.pem \xa0\xa0 Your cert will expire on 2020-12-18. To obtain a new or tweaked \xa0\xa0 version of this certificate in the future, simply run certbot \xa0\xa0 again. To non-interactively renew *all* of your certificates, run \xa0\xa0 "certbot renew" \xa0- Your account credentials have been saved in your Certbot \xa0\xa0 configuration directory at /etc/letsencrypt. You should make a \xa0\xa0 secure backup of this folder now. This configuration directory will \xa0\xa0 also contain certificates and private keys obtained by Certbot so \xa0\xa0 making regular backups of this folder is ideal. \n Test automatic renewal The Certbot packages on your system come with a cron job or systemd timer that will renew your certificates automatically before they expire. You will not need to run Certbot again, unless you change your configuration. You can test automatic renewal for your certificates by running this command: sudo certbot renew --dry-run The command to renew certbot is installed in one of the following locations: \xa0\xa0\xa0 /etc/crontab/ \xa0\xa0\xa0 /etc/cron.*/* \xa0\xa0\xa0 systemctl list-timers \n \n', 'tags': '', 'url': 'Certbot.html'}]};