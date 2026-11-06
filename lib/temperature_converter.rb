module PrivateRepo
  class TemperatureConverter
    def self.celsius_to_fahrenheit(celsius)
      (celsius * 9.0 / 5.0) + 32
    end
  end
end
