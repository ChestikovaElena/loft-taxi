import React from "react";
import { MapComponent } from "./Map.js";
import { render } from "@testing-library/react";
import mapboxgl from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {},
  })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<MapComponent />);
    expect(mapboxgl.Map).toHaveBeenCalledWith({
      center: [30.316275, 59.940571],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/basic-v9",
      zoom: 13,
      attributionControl: false,
    });
  });
});