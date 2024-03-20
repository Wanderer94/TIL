컴파일러(compiler)

컴파일러는 프로그램 전체를 스캔하여 이를 모두 기계어로 번역한다. 전체를 스캔하기 때문에 대개 컴파일러는 초기 스캔 시간이 오래 걸린다. 하지만 전체 실행 시간만 따지고 보면 인터프리터 보다 빠르다. 왜냐하면 컴파일러는 초기 스캔을 마치면 실행파일을 만들어 놓고 다음에 실행할때 이전에 만들어 놓았던 실행파일을 실행하기 때문이다. 하지만 단점도 있다. 컴파일러는 고급언어로 작성된 소스를 기계어로 번역하고 이 과정에서 오브젝트 코드(Object Code)라는 파일을 만드는데 이 오브젝트 코드를 묶어서 하나의 실행 파일로 다시 만드는 링킹(Linking) 이라는 작업을 해야한다. 설명만 딱 봐도 뚝딱하고 번역을 하는것 같아 보이진 않는다. 이때문에 컴파일러는 통상적으로 인터프리터 보다 많은 메모리를 사용해야 한다. 또한 컴파일러는 오류 메시지를 생성할때 전체 코드를 검사한 후에 오류 메시지를 생성한다. 그래서 실행 전에 오류를 발견 할 수 있다. 대표적인 언어로 C,C++,JAVA 등이 있다.

인터프리터(interpreter)

컴파일러와는 반대로 인터프리터는 프로그램 실행시 한 번에 한 문장씩 번역한다. 그렇기 때문에 한번에 전체를 스캔하고 실행파일을 만들어서 실행하는 컴파일러보다 실행시간이 더 걸린다. 그럴 수 밖에 없다고 본다. 한 문장 읽고 번역하여 실행시키는 과정을 반복하는게 만들어 놓은 실행파일을 한번 실행시키는 것보다 빠르긴 힘들어 보인다. 하지만 인터프리터는 메모리 효율이 좋다. 왜냐하면 컴파일러처럼 목적코드를 만들지도 않고, 링킹 과정도 거치지 않기 때문이다. 이 때문에 인터프리터는 메모리 사용에 컴파일러 보다 더 효율적인 모습을 보인다. 인터프리터는 오류 메시지 생성과정이 컴파일러와 다르다. 인터프리터는 한번에 한문장씩 번역하기 때문에 프로그램을 실행시키고 한 문장씩 번역될때 오류를 만나게 되면 바로 프로그램을 중지한다. 그래서 프로그램을 실행해봐야지만 오류 발견이 가능하다. 대표적인 언어로 Python, Ruby, Javascript 등이 있다.