import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const [selectedRock, setSelectedRock] = useState<any | null>(null); // setting my state for selected rock
  const dataURL = "https://dev-kdurkin-sql.pantheonsite.io/wp-json/twentytwentyone-child/v1/rockSQLdbEndpoint";

 
  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setDataset(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="rock-title">SQL for SQuirreLs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-container">
          <h1 className="sub-title">Rocks for Sale</h1>
          <div className="grid-container merienda-thin">
            {dataset.map((rock) => (
              <div
                key={rock.ID}
                className="grid-item"
                onClick={() => setSelectedRock(rock)} // open modal with all of the rock's details   
              >
                <div className="card">
                  <div className="image-container">
                    <img
                      src={rock.rock_image}
                      alt={rock.post_title || 'Rock for Sale'}
                      className="rock-image"
                    />
                  </div>
                  <h2 className="card-title">{rock.post_title || 'Untitled Post'}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* modal for rock  */}
        <IonModal
          isOpen={!!selectedRock}
          onDidDismiss={() => {
            setSelectedRock(null); // close modal
          }}
        >
          <IonContent>
            <div className="modal-content">
              {selectedRock && (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      <h2 className="modal-content">{selectedRock.post_title}</h2>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      <strong>Description:</strong> {selectedRock.post_content}
                    </p>
                    <p>
                      <strong>Price:</strong> ${selectedRock.rock_price}
                    </p>
                    <p>
                      <strong>Rock Name:</strong> {selectedRock.rock_name}
                    </p> 
                    <p>
                      <strong>Contact:</strong> {selectedRock.contact_email}
                    </p>

   

                    <IonButton className="modal-buttons" expand="block" onClick={() => setSelectedRock(null)}>
                      Close
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              )}
            </div>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;