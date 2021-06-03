import React from "react";
import { MapComponent } from "./Map.js";
import { render } from "@testing-library/react";
import mapboxgl from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn() }))
}));

describe('Map', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MapComponent />);
    expect(mapboxgl.Map).toHaveBeenCalledWith({
      style: 'mapbox://styles/mapbox/basic-v9',
      zoom: 13,
      attributionControl: false,
      center: [56.25, 58.00],
      container: getByTestId('map'),
    });
  });
});