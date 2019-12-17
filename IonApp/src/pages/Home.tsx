import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
  IonToolbar, 
  IonItem, 
  IonCheckbox, 
  IonLabel, 
  IonNote, 
  IonBadge,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon
 } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>- Ion App -</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonCheckbox slot="start"/>
            <IonLabel>
              <h1>Crie uma ideia:</h1>
              <IonNote> Uma ideia que eu acabei de criar </IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 dias
            </IonBadge>
          </IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
