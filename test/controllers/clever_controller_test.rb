require 'test_helper'

class CleverControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
