import React from "react";
import { Map } from "./Map.js";
import { render } from "@testing-library/react";
import mapboxgl from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('Map', () => {
it('renders correctly', () => {
    const { getByTestId } = render(<Map />);
    expect(mapboxgl.Map).toHaveBeenCalledWith({
      style: 'mapbox://styles/mapbox/basic-v9',
      zoom: 13,
      attributionControl: false,
      center: [56.25, 58.00],
      container: getByTestId('map'),
    });
  });
});