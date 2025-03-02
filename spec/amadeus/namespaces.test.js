import Amadeus from '../../src/amadeus';

let amadeus;

describe('Namespaces', () => {
  it('should exports an Client object', () => {
    expect(Amadeus).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      amadeus = new Amadeus({
        clientId: '123',
        clientSecret: '234'
      });
    });

    it('should define all expected paths', () => {
      expect(amadeus.referenceData).toBeDefined();
      expect(amadeus.referenceData.urls).toBeDefined();
      expect(amadeus.referenceData.urls.checkinLinks).toBeDefined();
      expect(amadeus.referenceData.location).toBeDefined();
      expect(amadeus.referenceData.locations).toBeDefined();
      expect(amadeus.referenceData.locations.airports).toBeDefined();
      expect(amadeus.referenceData.locations.cities).toBeDefined();
      expect(amadeus.referenceData.locations.hotel).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byCity).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byGeocode).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byHotels).toBeDefined();
      expect(amadeus.referenceData.locations.pointOfInterest).toBeDefined();
      expect(amadeus.referenceData.locations.pointsOfInterest).toBeDefined();
      expect(amadeus.referenceData.locations.pointsOfInterest.bySquare).toBeDefined();
      expect(amadeus.referenceData.airlines).toBeDefined();
      expect(amadeus.referenceData.recommendedLocations).toBeDefined();

      expect(amadeus.schedule).toBeDefined();
      expect(amadeus.schedule.flights).toBeDefined();

      expect(amadeus.analytics).toBeDefined();
      expect(amadeus.analytics.itineraryPriceMetrics).toBeDefined();

      expect(amadeus.travel).toBeDefined();
      expect(amadeus.travel.analytics).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.traveled).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.booked).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod).toBeDefined();
      expect(amadeus.travel.predictions).toBeDefined();
      expect(amadeus.travel.predictions.tripPurpose).toBeDefined();
      expect(amadeus.travel.predictions.flightDelay).toBeDefined();
      expect(amadeus.travel.tripParser).toBeDefined();

      expect(amadeus.shopping).toBeDefined();
      expect(amadeus.shopping.flightDates).toBeDefined();
      expect(amadeus.shopping.flightDestinations).toBeDefined();
      expect(amadeus.shopping.flightOffers).toBeDefined();
      expect(amadeus.shopping.flightOffersSearch).toBeDefined();
      expect(amadeus.shopping.flightOffers.prediction).toBeDefined();
      expect(amadeus.shopping.flightOffers.pricing).toBeDefined();
      expect(amadeus.shopping.seatmaps).toBeDefined();

      expect(amadeus.shopping.activities).toBeDefined();
      expect(amadeus.shopping.activities.bySquare).toBeDefined();
      expect(amadeus.shopping.activity).toBeDefined();

      expect(amadeus.booking).toBeDefined();
      expect(amadeus.booking.flightOrders).toBeDefined();

      expect(amadeus.shopping.hotelOffers).toBeDefined();
      expect(amadeus.shopping.hotelOffersByHotel).toBeDefined();
      expect(amadeus.shopping.hotelOffer).toBeDefined();

      expect(amadeus.shopping.hotelOfferSearch).toBeDefined();
      expect(amadeus.shopping.hotelOffersSearch).toBeDefined();

      expect(amadeus.shopping.availability).toBeDefined();
      expect(amadeus.shopping.availability.flightAvailabilities).toBeDefined();

      expect(amadeus.booking.flightOrder).toBeDefined();
      expect(amadeus.booking.hotelBookings).toBeDefined();

      expect(amadeus.eReputation).toBeDefined();
      expect(amadeus.eReputation.hotelSentiments).toBeDefined();

      expect(amadeus.media).toBeDefined();
      expect(amadeus.media.files).toBeDefined();

      expect(amadeus.airport).toBeDefined();
      expect(amadeus.airport.directDestinations).toBeDefined();
      expect(amadeus.airport.predictions).toBeDefined();
      expect(amadeus.airport.predictions.onTime).toBeDefined();

      expect(amadeus.safety).toBeDefined();
      expect(amadeus.safety.safetyRatedLocations).toBeDefined();
      expect(amadeus.safety.safetyRatedLocations.bySquare).toBeDefined();
      expect(amadeus.safety.safetyRatedLocation).toBeDefined();

      expect(amadeus.location).toBeDefined();
      expect(amadeus.location.analytics).toBeDefined();
      expect(amadeus.location.analytics.categoryRatedAreas).toBeDefined();

      expect(amadeus.dutyOfCare).toBeDefined();
      expect(amadeus.dutyOfCare.diseases).toBeDefined();
      expect(amadeus.dutyOfCare.diseases.covid19AreaReport).toBeDefined();
      expect(amadeus.dutyOfCare.diseases.covid19Report).toBeDefined();

      expect(amadeus.airline.destinations).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(amadeus.referenceData.urls.checkinLinks.get).toBeDefined();
      expect(amadeus.referenceData.location('ALHR').get).toBeDefined();
      expect(amadeus.referenceData.locations.get).toBeDefined();
      expect(amadeus.referenceData.locations.airports.get).toBeDefined();
      expect(amadeus.referenceData.locations.cities.get).toBeDefined();
      expect(amadeus.referenceData.locations.hotel.get).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byCity.get).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byGeocode.get).toBeDefined();
      expect(amadeus.referenceData.locations.hotels.byHotels.get).toBeDefined();
      expect(amadeus.referenceData.locations.pointOfInterest('XXX').get).toBeDefined();
      expect(amadeus.referenceData.locations.pointsOfInterest.get).toBeDefined();
      expect(amadeus.referenceData.locations.pointsOfInterest.bySquare.get).toBeDefined();
      expect(amadeus.referenceData.airlines.get).toBeDefined();
      expect(amadeus.referenceData.recommendedLocations.get).toBeDefined();

      expect(amadeus.travel.analytics.airTraffic.traveled.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.booked.get).toBeDefined();
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod.get).toBeDefined();
      expect(amadeus.travel.predictions.tripPurpose.get).toBeDefined();
      expect(amadeus.travel.predictions.flightDelay.get).toBeDefined();

      expect(amadeus.shopping.flightDates.get).toBeDefined();
      expect(amadeus.shopping.flightDestinations.get).toBeDefined();
      expect(amadeus.shopping.flightOffersSearch.get).toBeDefined();
      expect(amadeus.shopping.seatmaps.get).toBeDefined();

      expect(amadeus.shopping.hotelOffers.get).toBeDefined();
      expect(amadeus.shopping.hotelOffersByHotel.get).toBeDefined();
      expect(amadeus.shopping.hotelOffer('XXX').get).toBeDefined();

      expect(amadeus.shopping.hotelOfferSearch('XXX').get).toBeDefined();
      expect(amadeus.shopping.hotelOffersSearch.get).toBeDefined();

      expect(amadeus.shopping.activities.get).toBeDefined();
      expect(amadeus.shopping.activities.bySquare.get).toBeDefined();
      expect(amadeus.shopping.activity('XXX').get).toBeDefined();

      expect(amadeus.booking.flightOrder('XXX').get).toBeDefined();

      expect(amadeus.schedule.flights.get).toBeDefined();

      expect(amadeus.analytics.itineraryPriceMetrics.get).toBeDefined();

      expect(amadeus.eReputation.hotelSentiments.get).toBeDefined();

      expect(amadeus.airport.predictions.onTime.get).toBeDefined();

      expect(amadeus.safety.safetyRatedLocations.get).toBeDefined();
      expect(amadeus.safety.safetyRatedLocations.bySquare.get).toBeDefined();
      expect(amadeus.safety.safetyRatedLocation('XXX').get).toBeDefined();

      expect(amadeus.location.analytics.categoryRatedAreas.get).toBeDefined();

      expect(amadeus.dutyOfCare.diseases.covid19AreaReport.get).toBeDefined();
      expect(amadeus.dutyOfCare.diseases.covid19Report.get).toBeDefined();

      expect(amadeus.airline.destinations.get).toBeDefined();
    });

    it('should define all expected .post methods', () => {
      expect(amadeus.shopping.flightOffers.prediction.post).toBeDefined();
      expect(amadeus.booking.flightOrders.post).toBeDefined();
      expect(amadeus.shopping.flightOffersSearch.post).toBeDefined();
      expect(amadeus.travel.tripParser.post).toBeDefined();
      expect(amadeus.shopping.flightOffers.pricing.post).toBeDefined();
      expect(amadeus.shopping.seatmaps.post).toBeDefined();
      expect(amadeus.booking.hotelBookings.post).toBeDefined();
    });

    it('should define all expected .delete methods', () => {
      expect(amadeus.booking.flightOrder('XXX').delete).toBeDefined();
    });

    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.urls.checkinLinks.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    it('.amadeus.referenceData.location().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.location('ALHR').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/ALHR', {});
    });

    it('.amadeus.referenceData.locations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    it('.amadeus.referenceData.locations.airports.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.airports.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });

    it('.amadeus.referenceData.locations.cities.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.cities.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/cities', {});
    });

    it('.amadeus.referenceData.locations.hotel.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.hotel.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotel', {});
    });

    it('.amadeus.referenceData.locations.hotels.byCity.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.hotels.byCity.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-city', {});
    });

    it('.amadeus.referenceData.locations.hotels.byGeocode.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.hotels.byGeocode.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-geocode', {});
    });

    it('.amadeus.referenceData.locations.hotels.byHotels.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.hotels.byHotels.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-hotels', {});
    });

    it('.amadeus.referenceData.recommendedLocations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.recommendedLocations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/recommended-locations', {});
    });

    it('.amadeus.referenceData.locations.pointsOfInterest.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointsOfInterest.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois', {});
    });

    it('.amadeus.referenceData.locations.pointOfInterest("XXX").get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointOfInterest('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/XXX');
    });

    it('.amadeus.referenceData.locations.pointsOfInterest.bySquare.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointsOfInterest.bySquare.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/by-square', {});
    });

    it('.amadeus.location.analytics.categoryRatedAreas.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.location.analytics.categoryRatedAreas.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/location/analytics/category-rated-areas', {});
    });

    it('.amadeus.referenceData.airlines.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.referenceData.airlines.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/airlines', {});
    });

    it('.amadeus.schedule.flights.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.schedule.flights.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/schedule/flights', {});
    });

    it('.amadeus.analytics.itineraryPriceMetrics.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.analytics.itineraryPriceMetrics.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/analytics/itinerary-price-metrics', {});
    });

    it('.amadeus.travel.analytics.airTraffic.traveled.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.traveled.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/traveled', {});
    });

    it('.amadeus.travel.analytics.airTraffic.booked.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.booked.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/booked', {});
    });

    it('.amadeus.travel.analytics.airTraffic.busiestPeriod.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.busiestPeriod.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/busiest-period', {});
    });

    it('.amadeus.travel.tripParser.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.travel.tripParser.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v3/travel/trip-parser', {});
    });

    it('.amadeus.shopping.flightDates.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDates.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-dates', {});
    });

    it('.amadeus.shopping.flightDestinations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDestinations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-destinations', {});
    });

    it('.amadeus.shopping.flightOffers.prediction.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffers.prediction.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers/prediction', {});
    });

    it('.amadeus.booking.flightOrders.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.booking.flightOrders.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/booking/flight-orders', {});
    });

    it('.amadeus.shopping.flightOffers.pricing.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffers.pricing.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers/pricing', {});
    });

    it('.amadeus.shopping.flightOffersSearch.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightOffersSearch.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    it('.amadeus.shopping.flightOffersSearch.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffersSearch.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    it('.amadeus.shopping.seatmaps.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.seatmaps.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    it('.amadeus.shopping.seatmaps.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.seatmaps.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    it('.amadeus.shopping.hotelOffers.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffers.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers', {});
    });

    it('.amadeus.shopping.hotelOffersByHotel.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffersByHotel.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/by-hotel', {});
    });

    it('.amadeus.shopping.hotelOffer().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffer('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/XXX', {});
    });

    it('.amadeus.shopping.hotelOfferSearch().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOfferSearch('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v3/shopping/hotel-offers/XXX', {});
    });

    it('.amadeus.shopping.hotelOffersSearch.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffersSearch.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v3/shopping/hotel-offers', {});
    });

    it('.amadeus.shopping.activities.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.activities.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities', {});
    });

    it('.amadeus.shopping.activities.bySquare.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.activities.bySquare.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities/by-square', {});
    });

    it('.amadeus.shopping.activity().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.shopping.activity('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities/XXX');
    });

    it('.amadeus.booking.flightOrder().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.booking.flightOrder('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    it('.amadeus.booking.flightOrder().delete', () => {
      amadeus.client.delete = jest.fn();
      amadeus.booking.flightOrder('XXX').delete();
      expect(amadeus.client.delete)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    it('.amadeus.booking.hotelBookings.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.booking.hotelBookings.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/booking/hotel-bookings', {});
    });

    it('.amadeus.eReputation.hotelSentiments.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.eReputation.hotelSentiments.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/e-reputation/hotel-sentiments', {});
    });

    it('.amadeus.travel.predictions.tripPurpose.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.predictions.tripPurpose.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/trip-purpose', {});
    });

    it('.amadeus.travel.predictions.flightDelay.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.travel.predictions.flightDelay.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/flight-delay', {});
    });

    it('.amadeus.airport.directDestinations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.airport.directDestinations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/airport/direct-destinations', {});
    });

    it('.amadeus.airport.predictions.onTime.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.airport.predictions.onTime.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/airport/predictions/on-time', {});
    });

    it('.amadeus.safety.safetyRatedLocations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations', {});
    });

    it('.amadeus.safety.safetyRatedLocations.bySquare.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocations.bySquare.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations/by-square', {});
    });

    it('.amadeus.safety.safetyRatedLocation().get', () => {
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocation('XXX').get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations/XXX');
    });

    it('.amadeus.shopping.availability.flightAvailabilities.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.availability.flightAvailabilities.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/availability/flight-availabilities', {});
    });

    it('.amadeus.shopping.flight_offers.upselling.post', () => {
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffers.upselling.post();
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers/upselling', {});
    });

    it('.amadeus.dutyOfCare.diseases.covid19AreaReport.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.dutyOfCare.diseases.covid19AreaReport.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/duty-of-care/diseases/covid19-area-report', {});
    });

    it('.amadeus.dutyOfCare.diseases.covid19Report.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.dutyOfCare.diseases.covid19Report.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/duty-of-care/diseases/covid19-area-report', {});
    });

    it('.amadeus.airline.destinations.get', () => {
      amadeus.client.get = jest.fn();
      amadeus.airline.destinations.get();
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/airline/destinations', {});
    });

  });
});
