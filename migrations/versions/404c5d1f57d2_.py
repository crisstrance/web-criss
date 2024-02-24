"""empty message

Revision ID: 404c5d1f57d2
Revises: 7858e575572a
Create Date: 2024-02-16 23:55:58.950164

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '404c5d1f57d2'
down_revision = '7858e575572a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorites', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=250), autoincrement=False, nullable=False))

    # ### end Alembic commands ###