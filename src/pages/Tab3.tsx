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
import './Tab3.css';

const Tab3: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const [selectedChipmunk, setSelectedChipmunk] = useState<any | null>(null); // State for selected chipmunk
  const dataURL = "https://dev-kdurkin-sql.pantheonsite.io/wp-json/twentytwentyone-child/v1/chipEndpoint";

  // Fetch the dataset
  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setDataset(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="chip-title">SQL SQuirreL Photo Competition</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page-container">
          <h1 className="page-title">Photo Contestants</h1>
          <div className="grid-container">
            {dataset.map((chipmunk) => (
              <div
                key={chipmunk.ID}
                className="grid-item"
                onClick={() => setSelectedChipmunk(chipmunk)} // Open modal with chipmunk details
              >
                <div className="card">
                  <div className="image-container">
                    <img
                      src={chipmunk.video_still}
                      alt={chipmunk.post_title || 'Chipmunk Image'}
                      className="video_image"
                    />
                  </div>
                  <h2 className="card-title">{chipmunk.post_title || 'Untitled Image'}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Chipmunk Details */}
        <IonModal
  isOpen={!!selectedChipmunk}
  onDidDismiss={() => setSelectedChipmunk(null)}
  style={{
    '--background': '#04122d',
  }}
>
          <IonContent>
          <div className="modal-content3">
            {selectedChipmunk && (
              <IonCard>
                <IonCardHeader style={{ backgroundColor: selectedChipmunk.fav_color }}>
                  <IonCardTitle>
                  <h2>{selectedChipmunk.post_title}</h2>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                
                  <p className="ion-padding-y-05rem">
                  Dear SQL SQuirreL community, {selectedChipmunk.post_content}
                   
                  </p>
                  <p className="ion-padding-y-05rem">
                    I am a <strong>{selectedChipmunk.common}</strong> and my Latin name is: <strong>{selectedChipmunk.latin}</strong> 
                  </p>
                  <hr/>
                  <p>Thank you for considering my submission.</p>
                  <p>sincerely, {selectedChipmunk.first_name} {selectedChipmunk.last_name}</p>
                  <IonButton className="modal-buttons" expand="block" onClick={() => setSelectedChipmunk(null)}>
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

export default Tab3;