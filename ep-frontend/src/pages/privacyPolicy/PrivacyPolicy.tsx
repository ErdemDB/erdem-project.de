import { Typography, Box, Container } from '@mui/material';

import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container className="containerPrivacy">
      <Typography variant="h4" gutterBottom>
        Datenschutzerklärung
      </Typography>
      <Box marginTop={2}>
        <Typography variant="body1" paragraph>
          Diese Datenschutzerklärung informiert Sie über unsere Praktiken bezüglich der Erfassung, Verwendung und Offenlegung Ihrer persönlichen Daten. Wir nehmen den Schutz Ihrer Privatsphäre ernst und verarbeiten Ihre Daten nur in Übereinstimmung mit den geltenden Datenschutzgesetzen und dieser Datenschutzerklärung.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Datenverantwortlicher:</strong> Verantwortlich für die Verarbeitung Ihrer persönlichen Daten ist Erdem Bedel. Bei Fragen zum Datenschutz können Sie uns über erdem.bedel1@gmail.com erreichen.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Erfassung von Daten:</strong> Wir erfassen folgende Daten:
          <ul>
            <li>Geolocation-Daten: Nur mit Ihrer ausdrücklichen Zustimmung, um Ihnen lokalisierte Dienste, wie Wetterinformationen, anzubieten.</li>
            <li>Kontaktdaten: Die Informationen, die Sie in unser Kontaktformular eingeben, um mit uns in Kontakt zu treten.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Verwendung von Daten:</strong> Ihre Daten werden zu diesen Zwecken verwendet:
          <ul>
            <li>Geolocation-Daten: Zur Bereitstellung von standortbezogenen Diensten.</li>
            <li>Kontaktdaten: Zur Kommunikation mit Ihnen.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Datenweitergabe:</strong> Ihre persönlichen Daten werden ohne Ihre Zustimmung nicht an Dritte weitergegeben, es sei denn, dies ist gesetzlich erforderlich oder notwendig zur Erbringung unserer Dienste.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Speicherung Ihrer Daten:</strong> Wir speichern Ihre persönlichen Daten nicht dauerhaft. Daten werden nur temporär verarbeitet und nicht auf unseren Servern gespeichert.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Ihre Rechte:</strong> Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer persönlichen Daten. Sie können auch die Verarbeitung Ihrer Daten einschränken oder der Verarbeitung widersprechen. Darüber hinaus haben Sie das Recht auf Datenübertragbarkeit.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Widerruf der Zustimmung:</strong> Sie können Ihre Einwilligung zur Nutzung Ihrer Daten jederzeit widerrufen, indem Sie uns kontaktieren.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Änderungen der Datenschutzerklärung:</strong> Diese Datenschutzerklärung kann von Zeit zu Zeit geändert werden. Die aktualisierte Erklärung wird auf unserer Webseite veröffentlicht.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Kontakt:</strong> Wenn Sie Fragen oder Anliegen zur Verarbeitung Ihrer persönlichen Daten haben, kontaktieren Sie uns bitte unter erdem.bedel1@gmail.com.
        </Typography>
      </Box>
    </Container>
  );
}

export default PrivacyPolicy;