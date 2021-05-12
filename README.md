# react-native-tracking-transparency



A generic component to react native

<img src=".gitlab/preview.png" />

## Install

add in package.json:

```bash
"react-native-tracking-transparency": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/react-native-tracking-transparency.git",
```

## Basic Usage

```dart
...
import { ModalTracking, requestTrackingPermission, Tracking } from 'react-native-tracking-transparency';

const MyScreen = () => {
...
  const [ isVisible, setIsVisible ] = useState(false);

  const toggleModal = () => setIsVisible(!isVisible);

// exemple for implement tracking transparency permissions
  const onInit = async () => {
    const trackingStatus = await requestTrackingPermission();

    if (trackingStatus === Tracking.AUTHORIZED ||
	  trackingStatus === Tracking.UNAVAILABLE
    ) {
      toggleModal();
      // some action code here
      return;
    }
    if (trackingStatus === Tracking.DENIED) {
      toggleModal();
    }
  };

  useEffect(()=>{
    onInit();
  },[]);

 return (
  <>
   <ModalTracking
     isVisible={toggleModal}
     description={strings('tracking.description')}
     buttonText={strings('tracking.enable')} 
    />
    ...
  </>
 );

};


```

## Properties

| Prop       | Default |   Type   | Description                           |
| :--------- | :-----: | :------: | :------------------------------------ |
| textButton      |   ''    | `string` | Text for button |
| description |    -    | `string` | Message description                       |

