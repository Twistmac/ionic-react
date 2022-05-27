import React from "react";
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {arrowBack} from "ionicons/icons";
import {useHistory} from "react-router";
import ClientAddContainer from "../components/add/ClientAddContainer";


const AddClient: React.FC = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AddClient</IonTitle>
                    <IonButtons slot="start">
                        <IonButton onClick={goBack}>
                            <IonIcon slot="icon-only" icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Note</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ClientAddContainer goBack={goBack}/>
            </IonContent>
        </IonPage>

    );
};

export default AddClient;
