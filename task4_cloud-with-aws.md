# 뭐 먹지? - AWS EC2 서버에 application 올려보기 by Jihyun

## Objective
Cloud의 기초 개념을 이해하고 AWS를 이용해 실제 서버에 application 올려보기.

## Basics
[Cloud Computing 101](https://www.slideshare.net/NicolAlabastro/cloud-computing-101-131293847/5)
- What is cloud computing?
- Why cloud?
- Types of cloud - IaaS, PaaS, SaaS, etc.
- Delivery models - Public, Private, Hybrid
- Top public cloud providers - AWS, Azure, GCP

## Demo Guide (For MacOS)
- [AWS](https://console.aws.amazon.com) 로그인 후 우측 상단 region 선택: `Europe (Ireland)`
- EC2 Instance 생성: Services -> EC2 -> Instances -> Launch Instance 클릭
    1. Amazon Machine Image: `Amazon Linux 2 AMI (HVM), SSD Volume Type` 선택
    2. Instance Type: `t2.micro` 선택
    3. Review and Launch -> Launch 클릭
    4. Key pair 이름 입력 후 다운로드 -> Launch Instances 클릭
    5. View Instances 클릭하여 인스턴스 목록에서 상태 확인
- 생성된 Instance 접속
    1. 인스턴스 목록에서 해당 항목 우클릭 -> Connect -> 하단 Example에 나와있는 명령어 복사
    2. Key pair 파일이 저장된 디렉토리에서 복사한 명령어 실행
    3. `Are you sure you want to continue connecting (yes/no)?` 질문에 `yes`로 답하면 해당 서버에 `ec2-user`라는 사용자로 접속됨
- 생성된 Instance에 `mo-mokji-web` 다운로드
    1. `sudo yum install git`
    2. `git clone https://github.com/jihyun-um/mo-mokji-web.git`
- `mo-mokji-web` 실행을 위한 툴 설치
    1. [Homebrew](https://docs.brew.sh/Homebrew-on-Linux)
        - 설치: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"`
        - Path 설정: 
            ```
            test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
            test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
            test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
            echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
            ```
        - 설치 결과 확인: `brew -v`
    2. yarn: `brew install yarn`
- `mo-mokji-web` 실행
    1. `cd mo-mokji-web`
    2. `yarn`
    3. `yarn start`
- Security group rule 추가 후 브라우저에서 접속
    1. 현재 인스턴스가 사용하고 있는 Security Group 클릭 -> Inbound rules -> Edit inbound rules
    2. Add rule 클릭 후 아래 정보 입력
        - Type: `Custom TCP`
        - Port Range: `3000`
        - Source: `0.0.0.0/0`
    3. 브라우저에 현재 인스턴스의 Public IP 또는 DNS로 접속 확인
        - `http://{Public IP or DNS}:3000`