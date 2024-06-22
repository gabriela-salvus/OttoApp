import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const ConectarScreen = () => {
  const [manager] = useState(new BleManager());
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        scanDevices();
        subscription.remove();
      }
    }, true);

    return () => manager.destroy();
  }, [manager]);

  const scanDevices = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }

      if (device.name) {
        setDevices((prevDevices) => {
          const deviceExists = prevDevices.find((d) => d.id === device.id);
          if (!deviceExists) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      }
    });

    setTimeout(() => manager.stopDeviceScan(), 5000);
  };

  const connectToDevice = async (device) => {
    try {
      await manager.stopDeviceScan();
      const connected = await device.connect();
      setConnectedDevice(connected);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => connectToDevice(item)} style={styles.deviceItem}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conectar ao Arduino</Text>
      {connectedDevice ? (
        <Text>Conectado a: {connectedDevice.name}</Text>
      ) : (
        <>
          <Button title="Scan Devices" onPress={scanDevices} />
          <FlatList
            data={devices}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.deviceList}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deviceList: {
    width: '100%',
  },
  deviceItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default ConectarScreen;
