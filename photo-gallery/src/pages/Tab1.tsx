import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import {
  InteractiveDashboard,
  MetabaseProvider,
  defineMetabaseAuthConfig,
} from "@metabase/embedding-sdk-react";

/**
 * This creates an auth config to pass to the `MetabaseProvider` component.
 * You'll need to replace the `metabaseInstanceUrl` and the `apiKey` values.
 */
const authConfig = defineMetabaseAuthConfig({
  metabaseInstanceUrl: "http://localhost:3000",
  apiKey: "YOUR_API_KEY",
});

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <MetabaseProvider authConfig={authConfig}>
        <InteractiveDashboard dashboardId={1} />
      </MetabaseProvider>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
