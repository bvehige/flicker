require 'test_helper'

class FlicksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @flick = flicks(:one)
  end

  test "should get index" do
    get flicks_url, as: :json
    assert_response :success
  end

  test "should create flick" do
    assert_difference('Flick.count') do
      post flicks_url, params: { flick: { category: @flick.category, image: @flick.image, title: @flick.title, year: @flick.year } }, as: :json
    end

    assert_response 201
  end

  test "should show flick" do
    get flick_url(@flick), as: :json
    assert_response :success
  end

  test "should update flick" do
    patch flick_url(@flick), params: { flick: { category: @flick.category, image: @flick.image, title: @flick.title, year: @flick.year } }, as: :json
    assert_response 200
  end

  test "should destroy flick" do
    assert_difference('Flick.count', -1) do
      delete flick_url(@flick), as: :json
    end

    assert_response 204
  end
end
