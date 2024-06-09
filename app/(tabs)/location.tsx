import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button } from 'react-native';
import * as Location from 'expo-location';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import PermissionsButton from '@/components/buttons/Location';


export default function LocationScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
     >
      <PermissionsButton />
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
