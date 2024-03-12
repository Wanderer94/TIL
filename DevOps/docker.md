Docker는 애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼입니다. Docker는 소프트웨어를 컨테이너라는 표준화된 유닛으로 패키징하며, 이 컨테이너에는 라이브러리, 시스템 도구, 코드, 런타임 등 소프트웨어를 실행하는 데 필요한 모든 것이 포함되어 있습니다. Docker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며 코드가 문제없이 실행될 것임을 확신할 수 있습니다.

- 운영체제를 가상화하지 않는 컨테이너 기술이니만큼 가상머신에 비해서 가벼우며, VM을 포함하여 한 대의 서버에 여러 개의 서비스를 구동하기 좋다.
- 보안상, 서비스가 털리더라도 원래의 서버에 영향을 미치기가 쉽지 않은 격리된 구조이니만큼, 가상화의 장점을 상당 부분 활용할 수 있다.
- 가상머신(VM)들과 달리, 기존 리눅스 자원(디스크, 네트워크 등)을 그대로 활용할 수 있어서 여러 서비스들을 한 서버에 때려 박아 돌리기가 좋은 편이다.
- 리눅스 커널 2.6.32-431 이상에서 지원한다. CentOS 기준으로는 CentOS 6.5 이상을 요구한다.
- 다른 컨테이너의 환경을 쉽게 그대로 재현할 수 있는 이미지를 제공한다.
  - 레이어로 구성되어 있으며 이를 유니온 마운트해서 관리되고 있다.
  - 다양한 이미지가 레이어를 공유할 수 있기 때문에 효율적으로 저장공간을 활용할 수 있다.
  - 이미지를 제공하는 원격 저장소가 있어서 누구나 쉽게 이미지를 가져올 수 있다.