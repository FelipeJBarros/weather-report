import { StyleSheet, Text, View } from 'react-native';

interface DataTagProps {
    icon: React.ReactElement;
    label: String;
    value: String;
}

export default function DataTag({ icon, label, value }: DataTagProps) {
    return (
        <View style={styles.container}>
            {icon}
            <Text style={styles.value}>
                {value}
            </Text>
            <Text style={styles.label}>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 2,
        minWidth: 80
    },
    value: {
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 18,
        color: "#F9F93B",
        marginTop: 6
    },
    label: {
        fontSize: 12,
        lineHeight: 14,
        color: "#F9F93B"
    }
});