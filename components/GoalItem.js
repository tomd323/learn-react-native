import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput, ScrollView, FlatList, Pressable } from 'react-native';
import { useState } from 'react';

// GoalItem component displays individual goal items
function GoalItem(props) {
    return (
        // Pressable component to make the goal item clickable
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                {/* Display the goal text passed via props */}
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    // Style for the goal item container
    goalItem: {
        margin: 8, // Margin around each goal item

        borderRadius: 6, // Rounded corners for the goal item
        backgroundColor: '#5e0acc', // Background color for the goal item
    },
    // style for when the item is pressed
    pressedItem: {
        opacity: 0.5
    },
    // Style for the goal text
    goalText: {
        color: 'white', // Text color
        padding: 8, // Padding inside each goal item
    }
});
