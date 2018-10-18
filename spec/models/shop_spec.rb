
require 'rails_helper'

describe Shop do

  it { should have_valid(:name).when("Launch") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:address).when("77 Summer St") }
  it { should_not have_valid(:address).when(nil, "") }

  it { should have_valid(:city).when("Boston") }
  it { should_not have_valid(:city).when(nil, "") }

  it { should have_valid(:state).when("MA") }
  it { should_not have_valid(:state).when(nil, "") }

  it { should have_valid(:zip).when("02111") }
  it { should_not have_valid(:zip).when(nil, "") }

end