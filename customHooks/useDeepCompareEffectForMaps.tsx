export default useDeepCompareEffectForMaps(() => {
  if (map) {
    map.setOptions(options);
  }
}, [map, options]);