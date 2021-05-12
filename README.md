# react-native-tracking-transparency 🕵️


A component to App Tracking transparency


| Preview PopUp | Preview ModalTracking | 
| :--------- | :---------|
| <img src="https://github.com/mrousavy/react-native-tracking-transparency/raw/master/img/example-1.png" width ="250"/> | <img src=".gitlab/preview.png" width="250" /> |    
 


## Install 🖥

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

| Prop       | Default |   Type   | Description |
| :--------- | :-----: | :------: | :------------------- |
| textButton      |   'Habilitar'    | `string` | Text for button |
| description | 'Habilite o tracking para que o app funcione corretamente.'  | `string` | Message descriptiom |

## Co-relateds Lib 📦

 > [react-native-tracking-transparency](https://github.com/mrousavy/react-native-tracking-transparency)
