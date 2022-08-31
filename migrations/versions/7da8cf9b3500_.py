"""empty message

Revision ID: 7da8cf9b3500
Revises: 528b4e32ff84
Create Date: 2022-08-30 09:01:06.967689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7da8cf9b3500'
down_revision = '528b4e32ff84'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('user_received_messages_fkey', 'user', type_='foreignkey')
    op.drop_column('user', 'received_messages')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('received_messages', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('user_received_messages_fkey', 'user', 'message', ['received_messages'], ['id'])
    # ### end Alembic commands ###
