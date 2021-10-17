class CreateFlicks < ActiveRecord::Migration[6.0]
  def change
    create_table :flicks do |t|
      t.string :title
      t.string :year
      t.string :category
      t.string :image

      t.timestamps
    end
  end
end
